class MyComponent extends React.Component {

    myRef = React.createRef() // 返回一个容器，容器可以存储被ref标识的节点，只能保存一个节点

    useRef = () => {
        console.log(this.myRef); 
    }

    setInputText = (currentNode) => {
        this.input2 = currentNode;
    }

    render(){
        return (
            <>
                {/** 1，String 类型的 Refs */}
                <input ref="input1">会被存到 this.refs 里去</input>  
                {/** 2. 回调函数：内敛函数与实例方法 */}
                <input ref={(currentNode) => this.input1 = currentNode}></input>
                <input ref={this.setInputText}></input>
                {/** 3. 16.3 以后使用 React.createRef */}
                <input ref={this.myRef}></input>
            </>
        )
    }
}