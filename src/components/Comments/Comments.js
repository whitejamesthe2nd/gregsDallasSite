import { useState,useRef } from "react";
import CommentList from "../CommentList/CommentList";





export default function Comments(){

    let [username, setuserName] = useState();
    let userNameRef = useRef();
    let [email, setemail] = useState();
    let emailRef = useRef();
    let [comment, setcomment] = useState();
    let commentRef = useRef();
    let [commentList, setcommentList] = useState([
        {name: 'Greg', email: 'Greg@greg.com', comment:'Hey Ya'},
        {name: 'Greg', email: 'Greg@greg.com', comment:'Hey Ya'},
     ]);



    let onClick= ()=>{
        setuserName(userNameRef.current.value);
        setcomment(commentRef.current.value);
        setemail(emailRef.current.value);

        setcommentList(prevcommentList => {
            return [...prevcommentList, {name:username, email:email, comment:comment }]
        })
        console.log(commentList);


    }

    return (
        <>
            <div>
                <input type={"text"} placeholder={'Name'} ref={userNameRef}></input>
                <input type={"email"} placeholder={"Email"} ref={emailRef}></input>
                <input type={"text"} placeholder={"Please Type your comment here"} ref={commentRef}></input>
                <button onClick={onClick}>Submit Comment</button>
            </div>
            <CommentList commentList={commentList}/>
        </>
    )
}
