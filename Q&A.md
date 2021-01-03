1. ReactDOM.render 的调用栈可以分为哪三个部分
2. 调度部分的主要作用是什么
3. 协调部分的主要作用是什么
4. 渲染部分的主要作用是什么
5. React 的设计理念是什么
6. React 15 和 React 16 的架构区别是什么
7. render 阶段可以分为哪两部分，每一部分又可以根据是否首屏渲染细分为
8. render 阶段的起点是哪个函数
9. 请画出 beginWork 的流程
10. React 是如何区分 mount 和 update 的
11. effectTag 有哪些，它的作用是什么
12. 请画出 completeWork 的流程
13. 二进制掩码的原理
14. 为什么 effectList 是单链表结构
15. 实现深度优先遍历
16. commit 阶段主要有哪几步
17. commit 阶段主要执行的操作有哪些
18. commit 阶段的入口函数是什么
19. before mutation 阶段前会执行什么操作
20. layout 阶段后会执行什么操作
21. before mutation 阶段的主要函数是什么，该函数主要完成了什么操作
22. mutation 阶段的主要函数是什么，该函数完成了什么操作
23. mutation 阶段，不同 effectTag 对应的函数是什么
24. layout 阶段，DOM 是否已完成渲染
25. layout 阶段的主执行函数是什么，该函数完成了什么操作
26. 比较 useEffect 和 useLayoutEffect 在不同阶段的异同点
27. React 的 diff 算法是什么
28. diff 算法的主要流程是什么
29. diff 算法的主要执行函数是什么
30. diff 算法针对单一节点和多节点的流程
31. React 为了降低算法复杂度，基于什么假设设计 diff 算法
32. diff 算法多节点情况下，有多少种比较的 case
33. 基于 React 的 diff 算法，开分者应该尽量减少什么操作
34. 什么情况下可以用 index 作为 key prop, 什么情况下不可以
35. 有哪些方法可以触发状态更新
36. 状态更新的流程
37. 异步状态更新可以类比为什么
38. Update 对象与 Fiber 的关系
39. Update 对象可以分为哪几种类型
40. 处理 Update 对象的主要函数是什么
41. 保存 Update 对象的数据结构是什么
42. 状态更新的优先级体现了 React 的什么设计理念
43. 状态更新的优先级在哪些场景有应用
44. 状态更新的优先级通过什么函数调度
45. 为什么 concurrent 模式下，componentWillXXX 有时候会被调用两次
46. render 阶段的更新可能被中断，那么 React 是怎么保证 updateQueue 中保存的 Update 不丢失
47. 有时候当前状态需要依赖前一个状态, 如何在支持跳过低优先级的同时保证状态的连续性
48. 什么是双缓存技术，在 React 中是如何体现的
49. ReactDOM.render 触发更新的流程
50. React 目前有多少种模式，legacy 和 concurrent 模式的差异是什么
51. 不同模式的入口函数是什么
52. `this.setState` 触发更新的流程是什么
53. `this.forceUpdate` 触发更新的流程是什么
54. useState 在 update 和 mount 时有何异同
55. hook 的数据结构是什么
56. `fiber.memorizedState` 和 `hook.memorizedState` 分别用来保存什么
57. 请说出不同 hooks，保存的数据类型分别是什么
58. `useState` 和 `useReducer` 在申明阶段和调用阶段分别做了什么
59. `useEffect` 的入口函数是什么，该函数主要完成了什么操作
60. 什么数据可以保存在 ref 中
61. ref 的更新发生在什么时候
62. ref 有对应的 effectTag 吗
63. 标示 ref 的 effectTag 是什么
64. HostComponent 和 ClassComponent 是如何设置和更新 ref 的
65. FunctionComponent 是如何保存 ref 的
66. ref 可以是什么形式的
67. `useMemo` 和 `useCallback` 的异同点是什么
68. 模拟实现一个 `useState`
69. concurrent 模式的优点是什么
70. concurrent 模式的底层架构是什么
71. concurrent 模式的架构驱动力是什么
72. concurrent 模式的架构运行策略是什么
73. 哪些 API 可以体现 concurrent 模式
74. Scheduler 可以实现什么功能
75. 时间切片是通过什么实现的
76. 浏览器一帧中，除了重排和重绘，有什么时间点可以执行 JS
77. 时间切片的主要函数是什么
78. Scheduler 运行优先级调度的主要函数是什么
79. Scheduler 一种有多少种优先级，分别是什么
80. 不同的优先级意味着什么
81. Scheduler 有多少个任务队列，分别用于保存什么任务
82. Scheduler 为了在 O(1) 的时间复杂度内找到最早的任务，使用了什么数据结构
83. Scheduler 优先级调度的流程是怎么样的
84. Scheducler 的优先级怎么转换为 lane 模型的优先级，通过什么函数转换
85. Lane 模型有哪些使用场景
86. React 根据什么需求实现 Lane 模型
87. Lane 模型可以类比为什么
88. Lane 模型的定义是什么
89. Lane 模型有哪些计算优先级的方法
90. React 是如何解决 Lane 模型的饥饿问题的
91. 在 React 的 concurrent 模式下，实现高优先任务插队的
92. 在同步模式下 setState 是异步还是同步的
93. 什么是代数响应
94. JSX 与 Fiber 的关系
95. React Component 与 React Element 的关系

