import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class EventServlet extends HttpServlet {

  public void service(HttpServletRequest request, HttpServletResponse response)
  throws IOException, ServletException {

    response.setContentType("text/html");
    PrintWriter out = response.getWriter();

    String eventname = request.getParameter("eventname");
    String date = request.getParameter("date");
    String location = request.getParameter("location");
    String seats = request.getParameter("seats");

    out.println("<html>");
    out.println("<body>");
    out.println("<center>");
    out.println("<h2>Event Details Submitted</h2>");
    out.println("<table border='1' cellpadding='10'>");
    out.println("<tr><th>Field</th><th>Value</th></tr>");
    out.println("<tr><td>Event Name</td><td>" + eventname + "</td></tr>");
    out.println("<tr><td>Date</td><td>" + date + "</td></tr>");
    out.println("<tr><td>Location</td><td>" + location + "</td></tr>");
    out.println("<tr><td>Seats Available</td><td>" + seats + "</td></tr>");
    out.println("</table>");
    out.println("<br>");
    out.println("<a href='http://localhost:8080/Myapp/index.html'>Go Back</a>");
    out.println("</center>");
    out.println("</body>");
    out.println("</html>");

    out.close();
  }
}
