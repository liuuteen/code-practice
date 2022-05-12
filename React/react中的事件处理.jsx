/**
 * 1. 通过 onXxx 属性指定事件处理函数
 *      a. React 使用自定义（合成）事件，非原生 DOM 事件 —— 为了更好的兼容性
 *      b. React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —— 为了更高效
 * 2. 通过 event.target 能得到发生事件的 DOM 元素对象 —— 不要过度使用 Refs
 */


class MyComponent extends React.Component{

    saveFormData = (dataType) => {
        return (event) => {
            this.setState({[dataType]: event.target.value})
        }
    }

    render () {
        return (
            <>
                <input onChange={saveFormData("username")} type="text" />
                <input onChange={saveFormData("password")} type="text" />
            </>
        )
    }

}