import { PropTypes } from 'prop-types'
class Person extends React.Component {
    static propTypes = {
        name: PropTypes.string.required,
        sex: PropTypes.string,
        age: PropTypes.number,
        speak: PropTypes.func, // 限制属性为函数
    }

    static defaultProps = {
        sex: '男', // 给 sex 设置默认值
        age: 18,
    }
}