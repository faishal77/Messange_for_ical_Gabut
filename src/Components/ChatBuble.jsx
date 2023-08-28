import React from 'react'

const ChatBuble = ({Img}) => {
    return (
        <>  
            <div className="chat chat-end m-5 ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={Img} />
                    </div>
                </div>
                <div className="chat-bubble">I hate you,I love you</div>
                <div className="chat-footer opacity-50">
                   07:00 PM
                </div>
            </div>  
            <div className="chat chat-end m-5 ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={Img} />
                    </div>
                </div>
                <div className="chat-bubble">Lebih suka turu,kalau sukanya kamu skip dulu</div>
                <div className="chat-footer opacity-50">
                   07:01 PM
                </div>
            </div>  
            <div className="chat chat-end m-5 ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={Img} />
                    </div>
                </div>
                <div className="chat-bubble">ngoding tuh seru,kalau chetannya sama kamu lucu</div>
                <div className="chat-footer opacity-50">
                 07:01 PM
                </div>
            </div>  
        </>
    )
}

export default ChatBuble