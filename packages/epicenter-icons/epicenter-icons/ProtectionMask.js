import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.0686 14.8454L20.0256 11.5L22 15L19.7002 20.3611C19.2737 21.3554 18.2951 22 17.2123 22C16.7425 22 16.2812 21.8828 15.8838 21.6324C12.0423 19.2126 5.40202 13.1147 7.3503 10.4879C8.12684 9.44098 10.112 9.73499 15.0686 14.8454ZM15.0686 14.8454L14.0021 20.0793', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 9C19.0905 4.99202 15.2832 2 11 2C6.02944 2 2 6.02944 2 11C2 13.0172 2.66363 15.1829 3.78448 16.7194C3.91943 16.9044 4 17.1249 4 17.3539V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ProtectionMask',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
