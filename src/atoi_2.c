#include <stdio.h>
#include <ctype.h>

int atoi(char s[]);

int main(int argc, const char *argv[])
{
  printf("%d\n", atoi("   12355"));
  printf("%d\n", atoi("   -12355"));
  return 0;
}

int atoi(char s[]) {
  int i,n;
  int sign;
  n = 0;

  for(i=0;isspace(s[i]);i++) {
    ;
  }
  sign = (s[i] == '-') ? -1 : 1;
  if(s[i] == '+' || s[i] == '-') {
    i++;
  }
  for(n=0; isdigit(s[i]); i++) {
    n = 10 * n + (s[i] - '0');
  }
  return sign * n;
}
