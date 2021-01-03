// 模拟 useState

/**
 * 全局变量，模拟是否首屏渲染
 */
let isMount = true;

/**
 * 临时变量，记录当前执行的 hook
 */
let workInProgressHook = null;

/**
 * Function Component: 
 * Fiber: {
 *   memorizedState: 保存 Hooks，链表结构，可以保存多个 Hooks
 *   stateNode: 保存 Component 对应的 Function
 * }
 */
const fiber = {
  memorizedState: null,
  stateNode: App,
};

/**
 * 模拟 render 和 commit
 */
function run() {
  // 每次 run 都从新指向第一个 hook
  workInProgressHook = fiber.memorizedState;
  // 获得新的 virtual dom
  const app = fiber.stateNode();
  // 区分 mount 和 update，以便 useState 中执行创建链表或者更新指针
  isMount = false;
  return app;
}

/**
 *  创建 update，并将 update 形成环状链表，并执行 run，触发更新
 *  pending 是最后一个 update
 */
function dispatchAction(queue, action) {
  const update = {
    action,
    next: null
  }

  if (queue.pending === null) {
    update.next = update
  } else {
    // 3 -> 0 -> 1 -> 2 -> 3
    // 4 -> 0 -> 1 -> 2 -> 3 -> 4
    update.next = queue.pending.next
    queue.pending.next = update
  }
  queue.pending = update

  run()
}

/**
 * 
 * 执行 state 计算过程，创建 hook 数据结构，用来保存 update
 */
function useState(initialState) {
  let hook;

  // 如果是 mount，则创建 hooks 单向链表，并将 fiber.memorizedState 指向第一个 hook
  if (isMount) {
    hook = {
      queue: {
        pending: null,
      },
      memorizedState: initialState, // 保存对应 hook 的 state/effect/callback
      next: null,
    };
    // 第一次调用 useState
    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;
    } else {
      // 将之后调用 useState 创建的 hook，追加在 fiber.memorizedState 后面
      workInProgressHook.next = hook;
    }
    // 全局 hook 指针，指向当前这个 hook, 这样下一次调用 useState 时则是指向当前指针
    workInProgressHook = hook;
  } else {
    // 如果是 update 则，获取当前 hook，按照调用顺序指向下一个 hook, run 会保证每次第一个都是第一个 hook
    hook = workInProgressHook
    workInProgressHook = workInProgressHook.next
  }

  // 取得上一次计算后的 state，如果有
  let baseState = hook.memorizedState
  // 如果已经有 update，则遍历 update 环状链表，计算 state
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next

    do {
      const action = firstUpdate.action
      baseState = action(baseState)
      firstUpdate = firstUpdate.next
    } while (firstUpdate !== hook.queue.pending.next)

    // 最后一个 update
    hook.queue.pending = null
  }

  // 将计算后的 state 保存在对应的 hook 中，并返回
  hook.memorizedState = baseState

  // 将 queue 传给 dispatchAction，每次 dispatchAction 都会更新 queue.pending
  return [baseState, dispatchAction.bind(null, hook.queue)]
}

function App() {
  const [num, updateNum] = useState(0);
  console.log('isMount ', isMount);
  console.log('num ', num);

  return {
    onClick() {
      updateNum((num) => num + 1);
    },
  };

  App.onClick();
}

window.app = run();
