<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html lang="es">
            <body>
                <h2>Cartelera de Películas</h2>
                <table>
                    <tr>
                        <th>Título (Idioma)</th>
                        <th>Director</th>
                        <th>Año</th>
                        <th>Plataforma</th>
                    </tr>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:sort select="anyo" data-type="number" order="ascending"/>
                        <xsl:if test="anyo &gt;= 2010">
                            <tr>
                                <td>
                                    <xsl:value-of select="titulo"/>
                                    (<xsl:value-of select="titulo/@idioma"/>)
                                </td>
                                <td><xsl:value-of select="director"/></td>
                                <td><xsl:value-of select="anyo"/></td>
                                <td><xsl:value-of select="@plataforma"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <ul>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:sort select="anyo" data-type="number" order="ascending"/>
                        <xsl:if test="anyo &lt; 2010">
                            <li>
                                <xsl:value-of select="titulo"/>
                                (<xsl:value-of select="titulo/@idioma"/>) -
                                <xsl:value-of select="director"/> -
                                <xsl:value-of select="anyo"/> – 
                                <xsl:value-of select="@plataforma"/>
                            </li>
                        </xsl:if>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
