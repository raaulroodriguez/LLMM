<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" />
    <xsl:template match="/">
        <html lang="es">
            <body>
                <h2>Cartelera de Películas</h2>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Director</th>
                        <th>Año</th>
                    </tr>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:if test="anyo &gt;= 2010">
                            <tr>
                                <td><xsl:value-of select="titulo" /></td>
                                <td><xsl:value-of select="director" /></td>
                                <td><xsl:value-of select="anyo" /></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
