#include <stdio.h>
#include <string.h>

void reverse(char s[]);

int main(int argc, const char *argv[])
{
  char s[] = "abcde";
  reverse(s);
  printf("%s\n", s);
  return 0;
}

void reverse(char s[]) {
  int i,j,c;
  for(i=0, j=strlen(s)-1; i<j;i++,j--) {
    c = s[i];
    s[i] = s[j];
    s[j] = c;
  }
}
