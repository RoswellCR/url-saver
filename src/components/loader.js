export default function Loader({item, id}){
    if(item === null){
        return <Container>Loading...</Container>
    }
    if(item===undefined){
        return <Container> No url found {id}</Container>
    }
    return <Container>Redirect {item}</Container>
}

function Container({children}){
    return <div>{children}</div>
}