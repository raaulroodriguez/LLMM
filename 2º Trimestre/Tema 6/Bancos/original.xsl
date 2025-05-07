<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <datos>
            <cuentas>
                <xsl:for-each select="listado/cuenta">
                    <cuenta dnititular="{titular/@dni}">
                        <creacion>
                            <xsl:value-of select="fechacreacion"></xsl:value-of>
                        </creacion>
                        <titular>
                            <xsl:value-of select="titular"></xsl:value-of>
                        </titular>
                        <saldoactual>
                            <xsl:value-of select="saldoactual"></xsl:value-of> 
                            <xsl:value-of select="saldoactual/@moneda"></xsl:value-of>
                        </saldoactual>                       
                    </cuenta>
                </xsl:for-each>
            </cuentas>
            <fondos>
                <xsl:for-each select="listado/fondo">
                    <fondo cuentaasociada="{cuentaasociada}">
                        <cantidaddepositada>
                            <xsl:value-of select="datos/cantidaddepositada"></xsl:value-of>
                        </cantidaddepositada>
                        <moneda>
                            <xsl:value-of select="datos/moneda"></xsl:value-of>
                        </moneda>
                    </fondo>
                </xsl:for-each>
            </fondos>
        </datos>
    </xsl:template>
</xsl:stylesheet>