FROM amazoncorretto:11-alpine-jdk
COPY target/ssFullStack-0.0.1-SNAPSHOT.jar ssFullStack-1.0.0.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/ssFullStack-1.0.0.jar"]