 <div id="contact_right">
                  <div class="contact-form">
                    
                        <form method="post" action="templates/contact.app.php">
                            <div>
                                <span><label>NOMBRE Y APELLIDO</label></span>
                                <span><input name="userName" type="text" class="textbox" required id="userName"></span>
                            </div>
                            <div>
                                <span><label>E-MAIL</label></span>
                                <span><input name="userEmail" type="text" class="textbox" required id="userEmail"></span>
                            </div>
                            <div>
                                <span><label>TELEFONO</label></span>
                                <span><input name="userPhone" type="text" class="textbox" required id="userPhone"></span>
                            </div>
                            <div>
                                <span><label>MENSAJE</label></span>
                                <span><textarea name="userMsg" maxlength="500" required id="userMsg"></textarea></span>
                            </div>
                           <div>
                                <span><input id="button" type="submit" name="submit" value="Enviar" formaction="templates/contact.app.php" formmethod="post"></span>
                          </div>
                        </form>
                    </div>
                </div>        

