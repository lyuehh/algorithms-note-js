#include <stdio.h>
#include <string.h>

#define MAXLINE 1000
#define M 5

int getline1(char line[], int maxline);
void copy(char to[], char from[]);
void process_line(char line[]);

int main(int argc, const char *argv[])
{
  int len;
  int max;
  char line[MAXLINE];
  char longest[MAXLINE];

  max = 0;
  while((len = getline1(line, MAXLINE)) > 0) {
    process_line(line);
    printf("%d: [%s]\n", len, line);
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

void process_line(char line[]) {
  size_t len = strlen(line);
  while(len > 0) {
    int c = line[len-1];// 第1次c取的是str[5], len并没变,还是6
    if(c != ' ' && c != '\t') { // 当取到3的时候不是空格或tab
      line[len] = '\0'; // 设置line[3]为'\0', 舍弃后面的字符
      break;
    }
    --len;
  }
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
      //s[j++] = c;
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
