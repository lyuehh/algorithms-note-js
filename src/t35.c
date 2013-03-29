#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void itob(int n, char s[], int b);
void reverse(char s[]);

int main(int argc, const char *argv[])
{
  int n = 36;
  char s_2[20];
  char s_8[20];
  char s_16[20];
  char s_36[20];

  itob(n, s_2, 2);
  itob(n, s_8, 8);
  itob(n, s_16, 16);
  itob(n, s_36, 36);

  printf("n: %d\n", n);
  printf("2: %s\n", s_2);
  printf("8: %s\n", s_8);
  printf("16: %s\n", s_16);
  printf("36: %s\n", s_36);

  return 0;
}

void itob(int n, char s[], int b) {
  static char digits[] = "0123456789ABCDEFGHIJKLMNOPQRSTUCWXYZ";
  int i, sign;

  if(b < 2 || b > 36) {
    fprintf(stderr, "Cannot support base %d\n", b);
    exit(EXIT_FAILURE);
  }

  if((sign = n) < 0) {
    n = -n;
  }
  i = 0;
  do {
    s[i++] = digits[n % b];
  } while ((n /= b) > 0);

  if(sign < 0) {
    s[i++] = '-';
  }
  s[i] = '\0';
  reverse(s);
}

void reverse(char s[]) {
  int i,j,c;
  for(i=0,j=strlen(s) - 1;s[i] != '\0' && i < j;i++, j--) {
    c = s[i];
    s[i] = s[j];
    s[j] = c;
  }
}
