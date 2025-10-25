import java.util.*;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        while(true){
            String D = sc.next();
            String N = sc.next();
            if(D.equals("0") && N.equals("0")) break;

            StringBuilder sb = new StringBuilder();
            for(char c : N.toCharArray()){
                if(c != D.charAt(0)) sb.append(c);
            }

            String res = sb.toString().replaceFirst("^0+", ""); // remove zeros à esquerda
            if(res.isEmpty()) System.out.println("0");
            else System.out.println(res);
        }
    }
}
