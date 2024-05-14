FROM openjdk:17-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} oopAsignment-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/oopAsignment-0.0.1-SNAPSHOT.jar"]