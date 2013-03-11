#include <stdio.h>

int main(int argc, const char *argv[])
{

  /* long nc; */
  /* nc = 0; */
  /* while(getchar() != EOF) { */
  /*   nc++; */
  /* } */
  /* printf("%ld", nc); */

  double nc;
  for(nc=0;getchar() != EOF;nc++) {
    ;
  }
  printf("%.0f", nc);

  return 0;
}
