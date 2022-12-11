import { useState } from "react";

export default function CreateForm({dispatch}){
    const [url, setUrl] = useState("");
    
    function handleChange(e){
        const value = e.target.value;
        setUrl(value);
    }
    function handleSubmit(e){
       e.preventDefault();
      // dispatch(e);
    }

    return  <form onSubmit={handleSubmit}>
        <input value={url} onChange={handleChange} />
        <button> Create URL </button>
    </form>;
}