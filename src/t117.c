#include <stdio.h>

#define MAXLINE 1000
#define M 5

int getline1(char line[], int maxline);
void copy(char to[], char from[]);

int main(int argc, const char *argv[])
{
  int len;
  int max;
  char line[MAXLINE];
  char longest[MAXLINE];

  max = 0;
  while((len = getline1(line, MAXLINE)) > 0) {
    if(len > M) {
      printf("%d: %s", len, line);
    }
    if(len > max) {
      max = len;
      copy(longest, line);
    }
  }
  if(max > 0) {
    printf("Longest %d: %s", len, longest);
  }
  return 0;
}

int getline1(char s[], int lim) {
  int c,i,j;
  for(i=0,j=0;i < lim - 1 && (c = getchar()) != EOF && c != '\n'; ++i) {
    if(i < lim -1) {
      s[j++] = c;
    }
  }
  if(c == '\n') {
    if(i <= lim - 1) {
      s[j++] = c;
    }
    ++i;
  }
  s[i] = '\0';
  return i;
}

void copy(char to[], char from[]) {
  int i;
  i = 0;
  while((to[i] = from[i]) != '\0') {
    ++i;
  }
}
