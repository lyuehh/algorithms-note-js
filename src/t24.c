#include <stdio.h>

void squeeze(char s[], char c[]);

int main(int argc, const char *argv[])
{
  char str[] = "aaccbbddaefgaabbeedd";
  squeeze(str, "abde");
  printf("%s\n", str);
  return 0;
}

void squeeze(char s[], char c[]) {
  int i, j,k;
  int instr2 = 0;
  for (i = j =0; s[i] != '\0'; i++) {
    instr2 = 0;
    for(k=0;c[k] != '\0' && !instr2; k++) {
      if(s[i] == c[k]) {
        instr2 = 1;
      }
    }
    if(!instr2) { // 每次处理s中的1个字符,放到外层循环处理
      s[j++] = s[i];
    }
  }
  s[j] = '\0';
}
