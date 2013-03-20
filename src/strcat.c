#include <stdio.h>

void strcat1(char s[], char t[]);

int main(int argc, const char *argv[])
{
  char str[20] = "aabb";
  char str2[] = "ccxxxdd";
  strcat1(str, str2);
  printf("%s\n", str);
  return 0;
}

void strcat1(char s[], char t[]) {
  int i, j;
  i = j = 0;
  while(s[i] != '\0') {
    i++;
  }
  while((s[i++] = t[j++]) != '\0') {
    ;
  }
}
