#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main3(){

    ifstream image("imgtest",ios::in| ios::binary);
    ofstream binary("imgB.txt",ios::out| ios::binary);

    if(!image.is_open()){
        printf("ni modo");
        return 0;
    }
    char ch;
    while (!image.eof()) {
        ch=image.get();
        binary.put(ch);
    }
    image.close();
    binary.close();    

    return 0;
}

int main(){

    //ifstream binary("imgB.tufa",ios::in|ios::binary);
    ifstream binary("Bujia.fuck",ios::in|ios::binary);
    ofstream image("pro2.png",ios::out| ios::binary);
    
    if(!image.is_open()){
        printf("ni modo");
        return 0;
    }
    char ch;
    while (!binary.eof()) {
        ch=binary.get();
        image.put(ch);

    }
    binary.close();   
    image.close();

    return 0;
}

int main2(){

    ifstream image("Proyecto3-enunciado.pdf.lzw",ios::in| ios::binary);
    ofstream binary("torque.pdf",ios::out| ios::binary);

    if(!image.is_open()){
        printf("ni modo");
        return 0;
    }
    char ch;
    while (!image.eof()) {
        ch=image.get();
        binary.put(ch);
    }
    image.close();
    binary.close();    

    return 0;
}
// autor
// https://github.com/ivail89/wsn_data_compresion/blob/master/LZW/lzw.cpp