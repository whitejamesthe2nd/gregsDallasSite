






export default function CommentList({commentList}){



    return(
        <>
        {commentList?commentList.map((ele,i)=>{
            return(<div key={i} className={'comment'}>
                    <h1 className="textInput">name: {ele.name}</h1>
                    <h1 className="textInput">email: {ele.email}</h1>
                    <h1 className="words">Comment: {ele.comment}</h1>
                </div>
                )
            }):null
            }
        </>
    )
}
