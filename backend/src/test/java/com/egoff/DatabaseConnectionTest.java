package com.egoff;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Connection;
import javax.sql.DataSource;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DatabaseConnectionTest {

    @Autowired
    DataSource dataSource;

    @Test
    void mariaDbConnection() throws Exception {
        try (Connection connection = dataSource.getConnection()) {
            assertThat(connection.isValid(1)).isTrue();
            assertThat(connection.getMetaData().getDatabaseProductName())
                    .containsIgnoringCase("MariaDB");
            assertThat(connection.getCatalog()).isEqualTo("egoff");
        }
    }
}