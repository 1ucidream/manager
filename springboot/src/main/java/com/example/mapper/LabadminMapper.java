package com.example.mapper;

/**
 * mybatis架构: controller-service-mapper进行sql操作
 */

import com.example.entity.Labadmin;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 操作lablabadmin相关数据接口
*/
public interface LabadminMapper {

    /**
      * 新增
    */
    int insert(Labadmin labadmin);

    /**
      * 删除
    */
    int deleteById(Integer id);

    /**
      * 修改
    */
    int updateById(Labadmin labadmin);

    /**
      * 根据ID查询
    */
    Labadmin selectById(Integer id);

    /**
      * 查询所有
    */
    List<Labadmin> selectAll(Labadmin labadmin);

    @Select("select * from labadmin where username = #{username}")
    Labadmin selectByUsername(String username);
}