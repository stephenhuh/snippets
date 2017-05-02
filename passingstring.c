char* find_replace(char* src, char* from, char* to, char* dest)
{
    int i, j, k = 0, flag = 0, counter = 0;
    for (i = 0; i < strlen(src); i++){
        if (src[i] == from[0]){
            flag = 1;
            for (j = 1; j < strlen(from); j++){
                if (src[i+j] != from[j]) {
                    flag = 0;
                }
                if (flag == 0)
                    break;
            }
            if (flag == 1) {
                for (k = 0; k < strlen(to); k++){
                    dest[counter] = to[k];
                    counter++;
                }
                i += strlen(from) - 1;
            } else {
                dest[counter] = src[i];
                counter++;
            }
        } else {
            dest[counter] = src[i];
            counter++;
        }
    }
    return dest;
}

void  main() {
    char *dest = (char*)malloc((strlen("foobarzoo"))* (sizeof(char)));
    char* res =find_replace("foobarzoo", "bar", "baz", dest);
    printf("res: %s\n", res);
}
