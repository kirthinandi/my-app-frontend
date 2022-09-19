import { React, useState } from "react";



export default function PostForm({ onPostSubmit }) {
    const [submitted, setSubmitted] = useState(false);
    const [ newPostForm, setNewPostForm ] = useState({
        title: '',
        date: '',
        entry: '',
        category: '',
    })

    const { title, date, entry, category} = newPostForm;
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify(newPostForm)
        }).then(r => r.json())
        .then(newPost => {
            onPostSubmit(newPost)
            setNewPostForm({
                title: '',
                date: '',
                entry: '',
            })
        })
        setSubmitted(true);
        };
        
        function handleChange(e) {
            const target = e.target.name
            const value = e.target.value

            setNewPostForm({ ...newPostForm, [ target]: value})
        };

        function formDetails () {
        return (
        <form onSubmit={handleSubmit}>
        <label>Enter your title:</label>
        <input type="text" name="title" value={title} onChange={handleChange} /><br />
        
        <label> Enter today's date:</label>
        <input type="text" name="date" value={date} onChange={handleChange} /><br />

        <label>Enter your entry:</label>
        <input type="text" name="entry" value={entry} onChange={handleChange} /><br />

        <select value={category} onChange={handleChange}>
        <option value="Happy">Happy</option>
        <option value="Angry">Angry</option>
        <option value="Sad">Sad</option>
      </select><br />

        <input type="submit" />
        </form>
        )
    };

    return (
        <main>{ !submitted ? (formDetails()) : (<h2> Your post has been published! </h2>)}</main>
    )
};