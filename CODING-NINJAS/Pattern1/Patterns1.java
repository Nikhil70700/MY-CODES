package Pattern1;

import java.util.Scanner;

public class Pattern1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // int i = 1;
        // while (i <= n) {
        // int j = 1;
        // while (j <= n) {
        // System.out.print(i);
        // j++;
        // }
        // System.out.println();
        // i++;
        // }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
                if (j > i) {
                    break;
                }
            }
            System.out.println();
        }
    }

}
