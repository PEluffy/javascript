package messanger.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

// @MessageMapping("/hello")
// @SendTo("/topic/greetings")
//     public Greeting greeting(HelloMessage message) throws Exception{

//         Thread.sleep(1000);
//         return new Greeting(HtmlUtils.htmlEscape(message.getName())+" joined !");
//     }


@MessageMapping("/chat.sendMessage")
@SendTo("/topic/chat")
 public Message sendMessage(Message message) throws Exception{
        return message;
 }

@MessageMapping("/chat.addUser") 
@SendTo("/topic/chat")
public Message addUser(Message message,SimpMessageHeaderAccessor headerAccessor){
    //set session variable username for websocket
    headerAccessor.getSessionAttributes().put("username",message.getSender());
    return message;
}

}