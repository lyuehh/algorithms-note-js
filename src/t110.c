#include <stdio.h>

int main(int argc, const char *argv[])
{
  int done = 0,
      c;
  while (done == 0) {
    c = getchar();
    if(c == '\t') {
      printf("\\t");
    } else if(c == '\b') {
      printf("\\b");
    } else if(c == '\\') {
      printf("\\\\");
    } else {
      printf("%c", c);
    }

    if(c == EOF) {
      done = 1;
    }
  }
  return 0;
}
