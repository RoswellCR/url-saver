export default function Item({item}){
    return (
      <div>
        <div>{item.shortUrl}</div>
        <div>{item.url}</div>
        <div>{item.views}</div>
      </div>
    ); 
}