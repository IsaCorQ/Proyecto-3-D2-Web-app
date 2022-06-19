#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <fstream>
#include <iostream>
#include "lz78/prcfile.hpp"
#include "lz78/lz78.hpp"
//#include "lz77/lz77.cpp"
#include "lz77/lz77.hpp"

#define COMPRESS   1
#define DECOMPRESS 0

int main(int argc, char *argv[]) {
    char fileName[50];
    int action, option, method;

    /** Get an option and a method of compression from the user. **/

    printf("Choose an action:\n[1] Compress\n[2] Decompress\n");
    scanf("%d", &option);

    action = (option == 1) ? COMPRESS : DECOMPRESS;

    /* The methods of compression will be asked only if action = 1 = COMPRESS */
    if (option == 1) {
        system("CLS");

        printf("Choose a method:\n[1] LZ78 \n[2] LZ77");
        //printf("Choose a method:\n[1] Bit Map\n[2] Huffman\n[3] LZ78\n[4] Bit Map + Huffman\n[5] Bit Map + Huffman + LZ78\n");
        scanf("%d", &method);

        if (method < 1 || method > 5) method = 1;
    }

    /* Get a valid file name from the user */
    //inputFileName(fileName);
    //std::string output = outputFileName();

    /** Action **/

    FileInfo myFile, myFileAux;

    if (action == COMPRESS) {
        /* Generate the bit map from the file and compose the FileInfo myFile.
           myFile have the file extension, the most occurring char more and the method of compression */
        BMP bitMap = generateBitMap(fileName, &myFile);
        myFile.method = method;

        if (method == 1){
            compressLZ78(fileName, &myFile);
        }
    } else {
        
        /* Read the head of the file. The head contains information about the compressed file */
        std::ifstream FileIn(fileName, std::ifstream::in | std::ifstream::binary);
        FileIn.read((char*) &myFile, sizeof(FileInfo));
        FileIn.close();
        std::string extension = getFileExtension(fileName);
        if (myFile.method == 1){
            decompressLZ78(fileName, &myFile);
        }
        else {
            std::cout<<"No fue posible comprimir el archivo";
        }   
    }

    return 0;
}
// compile: g++ main.cpp prcfile.cpp lz78.cpp huffman.cpp bitmap.cpp
// g++ main.cpp lz78/prcfile.cpp lz78/lz78.cpp lz78/huffman.cpp lz77/lz77.cppclear
// Autor
// https://github.com/murilocamargos/aedsiii-compression/tree/3066922dd215494eecda730a690d1ff41c8f75db
