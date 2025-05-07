<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <body>
                <h1>Portátiles</h1>
                <table>
                    <tr>
                        <th>Peso</th>
                        <th>RAM</th>
                        <th>Disco</th>
                        <th>Precio</th>
                    </tr>
                    <xsl:for-each select="pedido/portatiles/portatil">
                        <xsl:if test="precio &lt; 900 and disco/@tipo = 'ssd'">
                            <tr>
                                <td><xsl:value-of select="peso"/></td>
                                <td><xsl:value-of select="ram"/> </td>
                                <td><xsl:value-of select="disco"/></td>
                                <td><xsl:value-of select="precio"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <h1>Tablets</h1>
                <table>
                    <tr>
                        <th>Plataforma</th>
                        <th>RAM</th>
                        <th>Batería</th>
                    </tr>
                    <xsl:for-each select="pedido/tablets/tablet">
                        <xsl:if test="caracteristicas/memoria &gt;= 2 and caracteristicas/tamanio &gt;= 7">
                            <tr>
                                <td><xsl:value-of select="plataforma"/></td>
                                <td><xsl:value-of select="caracteristicas/memoria"/> </td>
                                <td><xsl:value-of select="caracteristicas/bateria"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                    </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>