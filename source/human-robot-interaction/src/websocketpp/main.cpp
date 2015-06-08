/**
 * Author: Aravinth Panchadcharam
 * Email: me@aravinth.info
 * Date: 01/06/15.
 * Project: Gesture Recogntion for Human-Robot Interaction
 */

#include <websocketpp/config/asio_no_tls.hpp>

#include <websocketpp/server.hpp>

#include <iostream>

typedef websocketpp::server<websocketpp::config::asio> server;

using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

// pull out the type of messages sent by our config
typedef server::message_ptr message_ptr;

// Define a callback to handle incoming messages
void on_message(server* s, websocketpp::connection_hdl hdl, message_ptr msg) {
    std::cout << " and message: " << msg->get_payload() <<std::endl ;
    std::cout << " opcode " << msg->get_opcode() <<std::endl ;
    
    s->send(hdl, msg->get_payload(), msg->get_opcode());
}

void on_open(server* s, websocketpp::connection_hdl hdl) {
    std::cout << "Open \n";
    
    const char* msg = "Hola";
    
    s->send(hdl, msg, websocketpp::frame::opcode::text);
}

int main() {
    // Create a server endpoint
    server echo_server;
    
    try {
        // Set logging settings
        echo_server.set_access_channels(websocketpp::log::alevel::all);
        echo_server.clear_access_channels(websocketpp::log::alevel::frame_payload);
        
        // Initialize ASIO
        echo_server.init_asio();
        
        // Register our message handler
        echo_server.set_open_handler(bind(&on_open,&echo_server,::_1));
        echo_server.set_message_handler(bind(&on_message,&echo_server,::_1,::_2));
        
        
        // Listen on port 9002
        echo_server.listen(9002);
        std::cout << "started";
        
        // Start the server accept loop
        echo_server.start_accept();
        
        // Start the ASIO io_service run loop
        echo_server.run();
        
        
    } catch (websocketpp::exception const & e) {
        std::cout << e.what() << std::endl;
    } catch (...) {
        std::cout << "other exception" << std::endl;
    }
}