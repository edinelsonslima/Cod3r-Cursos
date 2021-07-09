// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    if(props.test){
        return props.children
    } else {
        return false
    }
}