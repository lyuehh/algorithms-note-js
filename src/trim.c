#include <stdio.h>
#include <string.h>

int trim(char s[]);

int main(int argc, const char *argv[])
{
  char s[] = "abcde       ";
  printf("[%s]\n", s);
  trim(s);
  printf("[%s]\n", s);
  return 0;
}

int trim(char s[]) {
  int n;
  for(n = strlen(s) - 1; n >= 0; n--) {
    if(s[n] != ' ' && s[n] != '\t' && s[n] != '\n') {
      break;
    }
  }
  s[n+1] = '\0';
  return n;
}
