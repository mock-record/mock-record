## 0.3.0

- 项目重构, 影响较大, 升级谨慎
- `&&` 和 `&` 用多个 `|` 来取代
- 处理bug:
  - Mixing named and default exports
    - 取消默认导出
  - Circular dependencies
    - 使用高阶函数
