// ES7 允许在 class 里面使用赋值语句
class Person {
    name = 'jack' // 实例属性 name属性存在于 实例对象身上

    speak(){} // speak方法存在于 prototype 原型上

    walk = function (){} // walk 方法存在于实例对象身上

    // 因此赋值语句+箭头函数适合 react 类组件
    onClickChange = () => {} // onClickChange 在实例对象身上，在render方法中可以通过this访问
}
