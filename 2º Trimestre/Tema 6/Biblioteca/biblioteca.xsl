<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    body {
                        font-size: <xsl:value-of select="biblioteca/css/body/letra"/>
                        <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;
                    }
                    table, td {
                        border-collapse: collapse;
                        border-style: <xsl:value-of select="biblioteca/css/tabla/tipoBorder"/>;
                        border-width: <xsl:value-of select="biblioteca/css/tabla/tamanioBorder"/>
                        <xsl:value-of select="biblioteca/css/tabla/tamanioBorder/@unidad"/>;
                        border-color: <xsl:value-of select="biblioteca/css/tabla/colorBorder"/>;
                    }
                    .antiguo {
                        color: red;
                    }
                    .prestado {
                        background-color: yellow;
                    }
                </style>
            </head>
            <body>
                <h1>Biblioteca</h1>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                    </tr>
                    <xsl:for-each select="biblioteca/libro">
                        <tr>
                            <td><xsl:value-of select="titulo"/></td>
                            <td><xsl:value-of select="autor"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="año &lt; 2000">
                                        <span class="antiguo"><xsl:value-of select="año"/></span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="año"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td><xsl:value-of select="categoria"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="@prestado = 'sí'">
                                        <span class="prestado">Prestado</span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <span>Disponible</span>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h1>Listado</h1>
                <ol>
                    <xsl:for-each select="biblioteca/libro[año &gt; 1950]">
                        <xsl:sort select="autor" order="descending"/>
                        <li><xsl:value-of select="autor"/></li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
