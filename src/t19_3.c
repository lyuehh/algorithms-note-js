#include <stdio.h>

int main(int argc, const char *argv[])
{
  int c;
  while((c = getchar()) != EOF) {
    if(c == ' ') {
      putchar(c);
      while((c = getchar()) == ' ' && c != EOF) {
        ;
      }
    }
    if(c == EOF) {
      break;
    }
    putchar(c);
  }
  return 0;
}
