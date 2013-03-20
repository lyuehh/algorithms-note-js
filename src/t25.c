#include <stdio.h>

int any(char s[], char c[]);

int main(int argc, const char *argv[])
{
  char str1[] = "acbde";
  char str2[] = "cdabe";
  printf("%d\n", any(str1, str2));
  return 0;
}

int any(char s1[], char s2[]) {
  int i,j;
  int pos = -1;
  for (i = 0; pos == -1 && s1[i] != '\0'; i++) {
    for (j = 0; pos == -1 && s2[j] != '\0'; j++) {
      if(s2[j] == s1[i]) { // s2中任何一个位置的字符出现在s1..
        pos = i;
      }
    }
  }
  return pos;
}
