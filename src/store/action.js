function getRandomURL(){
    const randomString = Math.random().toString(32).substring(2,5) + 
    Math.random().toString(32).substring(2,5);
    return randomString;
}

export function add(state , action) {
     const url = action.data;
     const shortUrl = getRandomURL();
     const temp = [...state.items];
     const newItem = {
         url : url.toString(),
         shortUrl: shortUrl,
         views: 0,
     };
     temp.unshift(newItem);
     localStorage.setItem('urls', JSON.stringify(temp))
     return {items:[...temp]}
}

export function load(state , action) {
     const data = localStorage.getItem('urls');
     if(data){
         const temp = JSON.parse(data);
       return {items:[...temp]}; 
        }
}

export function addView(state , action) {
    const data = localStorage.getItem('urls');
     if(data){
         const items = JSON.parse(data);
         
          const item = items.find(i=> i.shortUrl===action.data);
          if(item){
            item.views++;
            localStorage.setItem("urls", JSON.stringify(items));
            return {items: [...items]}; 
          }
            
        } 
    
}