#include <stdio.h>

int main(int argc, const char *argv[])
{
  int c,
      pc;
  while((c = getchar()) != EOF) {
    if(c == ' ') {
      if(pc != ' ') {
        putchar(c);
      }
    }
    if(c != ' ') {
      putchar(c);
    }
    pc = c;
  }
  return 0;
}
