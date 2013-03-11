#include <stdio.h>

int main(int argc, const char *argv[])
{

  /* printf("%d\n", argc); */
  /* printf("%s\n", argv[0]); */
  /* printf("%s\n", argv[1]); */

  /* int c; */
  /* c = getchar(); */
  /* while(c != EOF) { */
  /*   putchar(c); */
  /*   c = getchar(); */
  /* } */

  int c;
  while((c = getchar()) != EOF) {
    putchar(c);
  }

  printf("%d\n", EOF);

  return 0;
}
