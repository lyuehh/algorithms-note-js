#include <stdio.h>

void expand(char s1[], char s2[]);

int main(int argc, const char *argv[])
{
  char s1[] = "1a-z1-9";
  char s2[999];

  expand(s1, s2);
  printf("%s\n", s2);
  return 0;
}

/*
 * my version, has some error
 * */
void expand(char s1[], char s2[]) {
  printf("%s\n", s1);
  int s_l, s_r;
  int i,j;
  int c;
  for(i=0,j=0;s1[i] != '\0';i++) {
    if(s1[i] == '-') {
      if ((i-1) >= 0) {
        s_l = s1[i-1];
        s_r = s1[i+1];
        for(c=s_l+1; c<s_r; c++) {
          s2[j++] = c;
        }
      }
    } else {
      s2[j++] = s1[i];
    }
  }
  printf("%c\n", s_l);
  printf("%c\n", s_r);
}
