package com.example.mapper;

/***
 *
 * Mapper 接口是通过 MyBatis 的  `@Mapper`  注解映射到 Mapper.xml 的。
 *
 *  `@Mapper`  注解用于将一个接口映射到一个 XML 配置文件。在本例中， `@Mapper`  注解用于将  `adminMapper`  接口映射到  `AdminMapper.xml`  文件。
 *  `AdminMapper.xml`  文件中定义了  `adminMapper`  接口中的方法的 SQL 映射。
 *  当  `adminService`  调用  `adminMapper`  的  `deleteById`  方法时，MyBatis 会根据  `AdminMapper.xml`  文件中的配置，
 *  执行  `delete from admin where id = #{id}`  语句，删除一条记录。
 *
 */

// 其实就是在对应的testmapper.xml开头写上: <mapper namespace="com.example.mapper.TestMapper"> 就完成了映射
public interface TestMapper {
}
