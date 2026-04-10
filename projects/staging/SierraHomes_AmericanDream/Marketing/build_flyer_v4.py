#!/usr/bin/env python3
"""
Sierra Homes — 2-Sided Flyer v4
Complete ground-up rebuild. No overlay on original PDF.
Pure ReportLab canvas, both pages built from scratch.
"""
from io import BytesIO
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from PIL import Image as PILImg

BASE    = "/sessions/zen-blissful-volta/mnt/AI_Memory_Brain/projects/staging/SierraHomes_AmericanDream/Marketing"
RENDERS = f"{BASE}/assets/renders"
LOGO    = f"{BASE}/assets/Sierra_Homes_USA_Logo_highres.png"
OUTPUT  = f"{BASE}/SierraHomes_AmericanDream_Flyer_2Sided.pdf"

# Page size — A4 portrait
W, H = 595.276, 841.890
MRG  = 22

# ── Colour palette ──────────────────────────────────────────────────────────
NAVY   = colors.HexColor('#1D235C')
NAVY_D = colors.HexColor('#141847')
GOLD   = colors.HexColor('#D4AF1A')
GOLD_P = colors.HexColor('#FBF5D8')
WHITE  = colors.white
CREAM  = colors.HexColor('#F5F3EF')
LGRAY  = colors.HexColor('#DDE1ED')
DKGRAY = colors.HexColor('#3A3A3A')
MGRAY  = colors.HexColor('#888EA8')
BG     = colors.HexColor('#F0F2F6')

# ── Shared helpers ───────────────────────────────────────────────────────────
def img_fill(c, path, x, y, bw, bh, overscan=1.0, x_anchor=0.5, y_anchor=0.5):
    """Centre-crop image to fill rectangle.
    overscan > 1.0 zooms in (crops edges).
    x_anchor: 0.0=show left edge, 0.5=centre, 1.0=show right edge.
    y_anchor: 0.0=show bottom, 0.5=centre, 1.0=show top.
    """
    try:
        pi = PILImg.open(path)
        iw, ih = pi.size
        sc = max(bw / iw, bh / ih) * overscan
        sw, sh = iw * sc, ih * sc
        ox = x - (sw - bw) * x_anchor
        oy = y - (sh - bh) * y_anchor
        c.saveState()
        p = c.beginPath(); p.rect(x, y, bw, bh); c.clipPath(p, stroke=0)
        c.drawImage(path, ox, oy, width=sw, height=sh, mask='auto')
        c.restoreState()
        return True
    except Exception as e:
        print(f"  img_fill ({path.split('/')[-1]}): {e}")
        return False


def draw_logo(c, cx, cy_mid, max_w, max_h):
    """Draw logo (with white pill bg) centred at (cx, cy_mid)."""
    try:
        pi = PILImg.open(LOGO)
        iw, ih = pi.size
        sc = min(max_w / iw, max_h / ih)
        lw, lh = iw * sc, ih * sc
        lx = cx - lw / 2
        ly = cy_mid - lh / 2
        PAD_X, PAD_Y = 10, 6
        c.setFillColor(WHITE)
        c.roundRect(lx - PAD_X, ly - PAD_Y, lw + PAD_X*2, lh + PAD_Y*2, 6,
                    fill=1, stroke=0)
        c.drawImage(LOGO, lx, ly, width=lw, height=lh, mask='auto')
    except Exception as e:
        print(f"  Logo err: {e}")
        c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 20)
        c.drawCentredString(cx, cy_mid - 7, "SIERRA USA HOMES")


def draw_header(c, bar_h=72):
    """Dark navy header bar with gold accent and centred logo."""
    c.setFillColor(NAVY_D)
    c.rect(0, H - bar_h, W, bar_h, fill=1, stroke=0)
    # Gold bottom stripe on header
    c.setFillColor(GOLD)
    c.rect(0, H - bar_h, W, 3, fill=1, stroke=0)
    draw_logo(c, W / 2, H - bar_h / 2 + 1, 230, bar_h - 20)
    return H - bar_h   # returns y_bottom


def draw_footer(c):
    """Consistent 3-column footer for both pages."""
    FH = 70
    c.setFillColor(NAVY_D)
    c.rect(0, 0, W, FH, fill=1, stroke=0)
    # Gold top stripe
    c.setFillColor(GOLD)
    c.rect(0, FH - 2, W, 2, fill=1, stroke=0)
    # Gold vertical dividers
    DIV_B, DIV_T = 9, FH - 16
    c.rect(196, DIV_B, 1.5, DIV_T - DIV_B, fill=1, stroke=0)
    c.rect(396, DIV_B, 1.5, DIV_T - DIV_B, fill=1, stroke=0)

    # Col 1 — Location & web
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 8)
    c.drawString(MRG, FH - 15, "ZIWANI ROAD, NYALI, MOMBASA")
    c.setFillColor(WHITE); c.setFont("Helvetica", 8.5)
    c.drawString(MRG, FH - 28, "SierraUSAHomes.com")
    c.drawString(MRG, FH - 42, "Info@SierraUSAHomes.com")

    # Col 2 — US Office
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 7.5)
    c.drawString(208, FH - 13, "AMERICAN OFFICE")
    c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 13)
    c.drawString(208, FH - 29, "+1 407-979-4473")
    c.setFillColor(MGRAY); c.setFont("Helvetica", 8)
    c.drawString(208, FH - 44, "Call For Booking")

    # Col 3 — Kenya Office
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 7.5)
    c.drawString(408, FH - 13, "KENYAN OFFICE")
    c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 13)
    c.drawString(408, FH - 29, "+254 733-555501")
    c.setFillColor(MGRAY); c.setFont("Helvetica", 8)
    c.drawString(408, FH - 44, "Call For Booking")

    return FH


# ═══════════════════════════════════════════════════════════════════════════
# PAGE 1  —  FRONT
# ═══════════════════════════════════════════════════════════════════════════
def build_page1(c):
    # White base
    c.setFillColor(WHITE); c.rect(0, 0, W, H, fill=1, stroke=0)

    # ── HEADER ──────────────────────────────────────────────────────────────
    HDR_H = 72
    y = draw_header(c, HDR_H)     # y = H - HDR_H = 769.89

    # ── HERO IMAGE (full bleed, seamless from header) ───────────────────────
    HERO_H = 248
    # Centred with enough zoom to crop grey edges; y_anchor shows rooftops.
    img_fill(c, f"{RENDERS}/11_Render_Exterior_Angle4.jpg",
             0, y - HERO_H, W, HERO_H,
             overscan=1.45, x_anchor=0.38, y_anchor=0.38)

    # Dark scrim at bottom of hero — taller so text has breathing room
    SCRIM_H = 52
    c.saveState()
    c.setFillColor(colors.HexColor('#0A0E2A')); c.setFillAlpha(0.58)
    c.rect(0, y - HERO_H, W, SCRIM_H, fill=1, stroke=0)
    c.restoreState()
    # Text vertically & horizontally centred inside the scrim
    # baseline = scrim_bottom + SCRIM_H/2 − cap_height_approx/2
    SCRIM_FONT = 13
    scrim_text_y = (y - HERO_H) + SCRIM_H / 2 - SCRIM_FONT * 0.35
    c.setFillColor(GOLD); c.setFont("Helvetica-Bold", SCRIM_FONT)
    c.drawCentredString(W / 2, scrim_text_y,
        "RESORT LIVING  ·  OCEAN BREEZE LOCATION  ·  WORLD-CLASS DESIGN")

    y -= HERO_H

    # ── TWO FEATURE IMAGES (seamless split) ─────────────────────────────────
    PANEL_H = 152
    half = W / 2
    img_fill(c, f"{RENDERS}/09_Render_Exterior_Angle2.jpg",  0,    y - PANEL_H, half,     PANEL_H)
    img_fill(c, f"{RENDERS}/12_Render_Exterior_Angle5.jpg",  half, y - PANEL_H, W - half, PANEL_H)
    # Hairline centre divider
    c.setFillColor(WHITE); c.rect(half - 1, y - PANEL_H, 2, PANEL_H, fill=1, stroke=0)

    y -= PANEL_H

    # ── HEADING BLOCK ────────────────────────────────────────────────────────
    HEADING_H = 108
    c.setFillColor(CREAM); c.rect(0, y - HEADING_H, W, HEADING_H, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0, y - 2,          W, 2, fill=1, stroke=0)   # top gold line
    c.rect(0, y - HEADING_H,  W, 2, fill=1, stroke=0)   # bottom gold line

    c.setFillColor(NAVY);  c.setFont("Helvetica-Bold", 38)
    c.drawCentredString(W / 2, y - 42, "AMERICAN DREAM")
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 31)
    c.drawCentredString(W / 2, y - 76, "APARTMENTS")
    c.setFillColor(DKGRAY); c.setFont("Helvetica", 10.5)
    c.drawCentredString(W / 2, y - 98,
        "Premium American-style residences with resort amenities  ·  Ziwani Road, Nyali, Mombasa")

    y -= HEADING_H + 10

    # ── PRE-LAUNCH PRICING ──────────────────────────────────────────────────
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 15)
    c.drawCentredString(W / 2, y - 15, "PRE-LAUNCH PRICING")
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.line(MRG, y - 22, W - MRG, y - 22)
    y -= 30

    PRICING = [
        ("1-Bedroom", "966 sqft  /  90 m²",       "KES 10,000,000"),
        ("2-Bedroom", "1,311 sqft  /  122 m²",    "KES 17,000,000"),
        ("3-Bedroom", "2,617 sqft  /  243 m²",    "KES 23,000,000"),
    ]
    ROW_H = 37

    for i, (unit, size, price) in enumerate(PRICING):
        ry = y - i * ROW_H
        # Alternating row bg
        c.setFillColor(CREAM if i % 2 == 0 else WHITE)
        c.rect(MRG, ry - ROW_H + 1, W - 2 * MRG, ROW_H - 1, fill=1, stroke=0)
        # Gold accent bar (left edge)
        c.setFillColor(GOLD)
        c.rect(MRG, ry - ROW_H + 5, 4, ROW_H - 11, fill=1, stroke=0)

        text_y = ry - ROW_H + (ROW_H - 14) / 2  # vertical centre

        # Unit type
        c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 15)
        c.drawString(MRG + 13, text_y, unit)
        # Size (sqft / m²)
        c.setFillColor(MGRAY); c.setFont("Helvetica", 9.5)
        c.drawString(MRG + 118, text_y + 1, size)
        # "Starts From  —"
        c.setFillColor(DKGRAY); c.setFont("Helvetica", 13)
        SF_X = W - MRG - 220
        c.drawString(SF_X, text_y, "Starts From  \u2014")
        # Price (right-aligned, bold gold)
        c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 15)
        c.drawRightString(W - MRG, text_y, price)
        # Row divider (except last)
        if i < len(PRICING) - 1:
            c.setStrokeColor(LGRAY); c.setLineWidth(0.5)
            c.line(MRG + 8, ry - ROW_H + 1, W - MRG - 8, ry - ROW_H + 1)

    y -= len(PRICING) * ROW_H + 6

    # ── T&C ─────────────────────────────────────────────────────────────────
    c.setFillColor(MGRAY); c.setFont("Helvetica", 7.5)
    c.drawString(MRG, y - 11,
        "T&C:   · Deposit: 30% of the sale price payable")
    c.drawString(MRG + 26, y - 22,
        "· Balance: Payable in equal monthly installments over 36 months")

    # ── FOOTER ──────────────────────────────────────────────────────────────
    draw_footer(c)

    c.showPage()


# ═══════════════════════════════════════════════════════════════════════════
# PAGE 2  —  BACK
# ═══════════════════════════════════════════════════════════════════════════
def build_page2(c):
    # Soft grey base
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)

    # ── HEADER ──────────────────────────────────────────────────────────────
    HDR_H = 72
    y = draw_header(c, HDR_H)
    y -= 12

    # ── SECTION: FLOOR PLANS ────────────────────────────────────────────────
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 17)
    c.drawCentredString(W / 2, y - 16, "FLOOR PLANS")
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.line(MRG, y - 23, W - MRG, y - 23)
    y -= 32

    GAP_FP = 8
    FPW = (W - 2 * MRG - 2 * GAP_FP) / 3   # 178.4 pt

    FP_DATA = [
        (f"{RENDERS}/05_FloorPlan_Detailed_3BHK.jpg", "3-BEDROOM", "2,617 sqft  /  243 m²"),
        (f"{RENDERS}/06_FloorPlan_Detailed_2BHK.jpg", "2-BEDROOM", "1,311 sqft  /  122 m²"),
        (f"{RENDERS}/07_FloorPlan_Detailed_1BHK.jpg", "1-BEDROOM",  "966 sqft  /  90 m²"),
    ]

    # Scaled image heights → tallest drives CARD_H
    fp_iheights = [PILImg.open(p).size[1] * FPW / PILImg.open(p).size[0] for p, _, _ in FP_DATA]
    IMG_H  = round(max(fp_iheights)) + 6
    LBL_H  = 38
    CARD_H = IMG_H + LBL_H + 10

    for i, (path, label, sqft) in enumerate(FP_DATA):
        cx = MRG + i * (FPW + GAP_FP)
        card_y = y - CARD_H
        # Card shell
        c.setFillColor(WHITE); c.setStrokeColor(LGRAY); c.setLineWidth(1)
        c.roundRect(cx, card_y, FPW, CARD_H, 6, fill=1, stroke=1)
        # Floor plan image (top of card)
        try:
            pi = PILImg.open(path); iw, ih = pi.size
            sc = FPW / iw; sw, sh = iw * sc, ih * sc
            c.drawImage(path, cx, card_y + LBL_H + (IMG_H - sh) / 2 + 5,
                        width=sw, height=sh, mask='auto')
        except Exception as e:
            print(f"  FP img err: {e}")
        # Navy label bar at bottom of card
        c.setFillColor(NAVY); c.rect(cx, card_y, FPW, LBL_H, fill=1, stroke=0)
        c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 11)
        c.drawCentredString(cx + FPW / 2, card_y + LBL_H - 15, label)
        c.setFillColor(GOLD); c.setFont("Helvetica", 9)
        c.drawCentredString(cx + FPW / 2, card_y + LBL_H - 27, sqft)

    y -= CARD_H + 12

    # ── LIFESTYLE STRIP ─────────────────────────────────────────────────────
    STRIP_H = 88
    img_fill(c, f"{RENDERS}/14_Render_Perspective2.jpg", 0, y - STRIP_H, W, STRIP_H)
    c.saveState()
    c.setFillColor(colors.HexColor('#0A0E2A')); c.setFillAlpha(0.60)
    c.rect(0, y - STRIP_H, W * 0.64, STRIP_H, fill=1, stroke=0)
    c.restoreState()
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 12)
    c.drawString(MRG + 4, y - STRIP_H + 62, "RESORT-STYLE LIVING IN NYALI")
    c.setFillColor(WHITE); c.setFont("Helvetica", 9.5)
    c.drawString(MRG + 4, y - STRIP_H + 43, "Lounge Style Clubhouse  ·  Resort Style Pool  ·  Rooftop Restaurant")
    c.drawString(MRG + 4, y - STRIP_H + 26, "Professional Gym  ·  Proximity to Malls & Schools  ·  24-Hr Gated Security")
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.rect(0, y - STRIP_H, W, STRIP_H, fill=0, stroke=1)

    y -= STRIP_H + 10

    # ── SECTION: DEVELOPMENT AMENITIES ──────────────────────────────────────
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 17)
    c.drawCentredString(W / 2, y - 16, "DEVELOPMENT AMENITIES")
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.line(MRG, y - 23, W - MRG, y - 23)
    y -= 32

    AMENITIES = [
        ("LOUNGE STYLE CLUBHOUSE",  "Premium lounge, rooftop movie nights & projector screening area."),
        ("ROOFTOP RESTAURANT",       "Enclosed restaurant with breathtaking ocean views & fine dining."),
        ("RESORT STYLE POOL",       "Resort-style pool set in lush landscaped gardens."),
        ("PROFESSIONAL GYM",        "Full cardio & strength training. No membership required."),
        ("24-HR GATED SECURITY",    "Manned guards, CCTV, and controlled access 24/7."),
        ("CHILDREN'S PLAY AREA",    "Dedicated play zones and courtyard gardens for families."),
        ("PROXIMITY TO AMENITIES",   "Near shopping malls, hospitals, schools & key conveniences."),
        ("GAMES ROOM",              "Social entertainment space for all residents."),
    ]

    FTR_H   = 70
    CTA_H   = 68
    n_cols  = 2
    CGAP    = MRG
    CW      = (W - 2 * MRG - CGAP) / 2
    n_rows  = -(-len(AMENITIES) // n_cols)   # ceil(8/2) = 4
    avail_h = y - FTR_H - CTA_H - 16
    RH      = round(avail_h / n_rows)
    RH      = max(48, min(76, RH))

    for i, (title, desc) in enumerate(AMENITIES):
        col = i % n_cols
        row = i // n_cols
        ax  = MRG + col * (CW + CGAP)
        ay  = y - row * RH

        # Card
        c.setFillColor(WHITE); c.setStrokeColor(LGRAY); c.setLineWidth(0.8)
        c.roundRect(ax + 4, ay - RH + 4, CW - 4, RH - 6, 4, fill=1, stroke=1)
        # Gold left accent bar
        c.setFillColor(GOLD)
        c.rect(ax, ay - RH + 8, 6, RH - 18, fill=1, stroke=0)

        mid_y = ay - RH + RH / 2
        c.setFillColor(NAVY);  c.setFont("Helvetica-Bold", 9)
        c.drawString(ax + 18, mid_y + 5, title)
        c.setFillColor(DKGRAY); c.setFont("Helvetica", 8)
        c.drawString(ax + 18, mid_y - 8, desc)

    y -= n_rows * RH + 16

    # ── CTA STRIP ───────────────────────────────────────────────────────────
    c.setFillColor(NAVY_D)
    c.rect(MRG, y - CTA_H, W - 2 * MRG, CTA_H, fill=1, stroke=0)
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.rect(MRG, y - CTA_H, W - 2 * MRG, CTA_H, fill=0, stroke=1)

    L1 = y - CTA_H * 0.25
    L2 = y - CTA_H * 0.52
    L3 = y - CTA_H * 0.79

    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(W / 2, L1, "UNITS AVAILABLE FOR REMOTE PURCHASE")
    c.setFillColor(WHITE); c.setFont("Helvetica", 10.5)
    c.drawCentredString(W / 2, L2, "Request pricing & flexible payment plans")
    c.setFillColor(GOLD);  c.setFont("Helvetica-Bold", 12)
    c.drawCentredString(W / 2, L3, "SierraUSAHomes.com")

    # ── FOOTER ──────────────────────────────────────────────────────────────
    draw_footer(c)

    c.showPage()


# ═══════════════════════════════════════════════════════════════════════════
# MAIN — build both pages, save to PDF
# ═══════════════════════════════════════════════════════════════════════════
buf = BytesIO()
cv  = canvas.Canvas(buf, pagesize=(W, H))
build_page1(cv)
build_page2(cv)
cv.save()
buf.seek(0)

with open(OUTPUT, 'wb') as f:
    f.write(buf.read())

print(f"\n✓  Saved → {OUTPUT}")
