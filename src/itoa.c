#include <stdio.h>
#include <string.h>

void reverse(char s[]);
void itoa(int n, char s[]);

int main(int argc, const char *argv[])
{
  int i = 1235;
  int i2 = -1235;
  char s[99];
  itoa(i, s);
  printf("%s\n",s);
  itoa(i2, s);
  printf("%s\n",s);
  return 0;
}

void itoa(int n, char s[]) {
  int i, sign;
  if((sign = n) < 0) {
    n = -n;
  }

  i = 0;
  do {
    s[i++] = n % 10 + '0';
  } while ((n /= 10) > 0);
  if(sign < 0) {
    s[i++] = '-';
  }
  s[i] = '\0';
  reverse(s);
}

void reverse(char s[]) {
  int i,j,c;
  for(i=0, j=strlen(s)-1; i<j;i++,j--) {
    c = s[i];
    s[i] = s[j];
    s[j] = c;
  }
}
